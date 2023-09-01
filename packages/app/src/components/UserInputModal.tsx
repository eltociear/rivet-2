import { FC, Suspense, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ArrayDataValue, DataValue, NodeId, StringDataValue, UserInputNode } from '@ironclad/rivet-core';
import { lastAnswersState } from '../state/userInput.js';
import Modal, { ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition } from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button';
import { Field } from '@atlaskit/form';
import { css } from '@emotion/react';
import type { monaco } from '../utils/monaco.js';
import { useMarkdown } from '../hooks/useMarkdown.js';
import { LazyCodeEditor } from './LazyComponents';
import { nodeByIdState } from '../state/graph';
import { invoke } from '@tauri-apps/api';

const styles = css`
  .question {
    margin-bottom: 8px;
    font-family: 'Roboto', sans-serif;
  }

  .editor {
    min-height: 400px;
    display: flex;
    resize: vertical;

    > div {
      width: 100%;
    }
  }

  .question pre {
    white-space: pre-wrap;
  }
`;

type UserInputModalProps = {
  open: boolean;
  questions: string[];
  nodeId?: NodeId;
  onSubmit: (answers: DataValue) => void;
  onClose?: () => void;
};

export const UserInputModal: FC<UserInputModalProps> = ({
  open,
  questions,
  nodeId = '' as NodeId,
  onSubmit,
  onClose,
}) => {
  const [answers, setAnswers] = useState<unknown[]>([]);
  const [lastAnswers, setLastAnswers] = useRecoilState(lastAnswersState);
  const node = useRecoilValue(nodeByIdState(nodeId));

  useEffect(() => {
    setAnswers(questions.map((question) => lastAnswers[question] ?? ''));
  }, [open, lastAnswers, questions]);

  const handleChange = (index: number, value: unknown) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const newLastAnswers = { ...lastAnswers };
    questions.forEach((question, index) => {
      newLastAnswers[question] = answers[index]!;
    });
    setLastAnswers(newLastAnswers);

    const results: DataValue = { type: 'string[]', value: answers };
    onSubmit(results);
  };

  return (
    <ModalTransition>
      {open && (
        <Modal width="x-large" onClose={onClose}>
          <ModalHeader>
            <ModalTitle>User Input</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div css={styles}>
              {questions.map((question, index) =>
                (node as UserInputNode).data.type === 'audio' ? (
                  <AudioUserInputModalQuestion index={index} key={`question-${index}`} question={question} />
                ) : (
                  <UserInputModalQuestion
                    index={index}
                    key={`question-${index}`}
                    question={question}
                    answer={answers?.[index]}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                  />
                ),
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit}>Submit</Button>
          </ModalFooter>
        </Modal>
      )}
    </ModalTransition>
  );
};

const AudioUserInputModalQuestion: FC<{
  index: number;
  question: string;
  onRecorded: (index: number, blob: Blob) => void;
}> = ({ question, index, onRecorded }) => {
  const [recording, setRecording] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const startRecording = async () => {
    await invoke('start_recording_audio');
    setRecording(true);
  };

  const stopRecording = async () => {
    await invoke('stop_recording_audio');
    setRecording(false);
  };

  return (
    <Field name={`question-${index}`} label={`Question ${index + 1}`}>
      {() => (
        <div>
          <div className="question">{question}</div>
          <div className="audio-controls">
            <Button onClick={startRecording} isDisabled={recording}>
              Record
            </Button>
            <Button onClick={stopRecording} isDisabled={!recording}>
              Stop
            </Button>
          </div>
          <audio ref={audioRef} controls></audio>
        </div>
      )}
    </Field>
  );
};

const UserInputModalQuestion: FC<{
  index: number;
  question: string;
  answer: string | undefined;
  onChange?: (index: number, newText: string) => void;
  onSubmit?: () => void;
}> = ({ question, answer, index, onChange, onSubmit }) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  const handleTextAreaKeyDown = (e: monaco.IKeyboardEvent) => {
    const enter: monaco.KeyCode = 3;
    if (e.keyCode === enter && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      onSubmit?.();
    }
  };

  const questionHtml = useMarkdown(question);

  return (
    <Field name={`question-${index}`} label={`Question ${index + 1}`}>
      {() => (
        <div>
          <div className="question" dangerouslySetInnerHTML={questionHtml} />
          <div className="editor">
            <Suspense fallback={<div />}>
              <LazyCodeEditor
                key={question}
                text={answer ?? ''}
                onChange={(e) => onChange?.(index, e)}
                autoFocus
                onKeyDown={handleTextAreaKeyDown}
                editorRef={editorRef}
              />
            </Suspense>
          </div>
        </div>
      )}
    </Field>
  );
};
