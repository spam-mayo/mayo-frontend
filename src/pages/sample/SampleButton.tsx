import Button from '@/components/module/Button';
import type { FC } from 'react';
import './SampleButton.scss';

const SampleButton: FC = () => {
  return (
    <div className="sampleBlock">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="yellow">
          BUTTON
        </Button>
        <Button color="yellow">BUTTON</Button>
        <Button size="small" color="yellow">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="yellow" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" text>
          버튼
        </Button>
        <Button color="gray" text>
          참가/취소 안내
        </Button>
        <Button size="small" color="yellow" text>
          매일
        </Button>
      </div>
    </div>
  );
};

export default SampleButton;
