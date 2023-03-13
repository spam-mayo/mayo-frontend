import Button from '@/components/common/Button';
import type { FC } from 'react';

const SampleButton: FC = () => {
  return (
    <div className="container">
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
      <div>
        <i className="icon-arrow-left"></i>
        <i className="icon-arrow-up-right2"></i>
        <i className="icon-bin"></i>
        <i className="icon-brightness-contrast"></i>
        <i className="icon-bubble"></i>
        <i className="icon-bullhorn"></i>
        <i className="icon-calendar"></i>
        <i className="icon-checkbox-checked"></i>
        <i className="icon-checkbox-unchecked"></i>
        <i className="icon-circle-down"></i>
        <i className="icon-circle-left"></i>
        <i className="icon-circle-right"></i>
        <i className="icon-circle-up"></i>
        <i className="icon-cloud-check"></i>
        <i className="icon-cloud-upload"></i>
        <i className="icon-cogs"></i>
        <i className="icon-connection"></i>
        <i className="icon-envelop"></i>
        <i className="icon-facebook2"></i>
        <i className="icon-filter"></i>
        <i className="icon-github"></i>
        <i className="icon-heart"></i>
        <i className="icon-home"></i>
        <i className="icon-image"></i>
        <i className="icon-instagram"></i>
        <i className="icon-location"></i>
        <i className="icon-menu"></i>
        <i className="icon-pencil"></i>
        <i className="icon-price-tag"></i>
        <i className="icon-radio-checked"></i>
        <i className="icon-radio-unchecked"></i>
        <i className="icon-share2"></i>
        <i className="icon-sort-amount-desc"></i>
        <i className="icon-twitter"></i>
        <i className="icon-union"></i>
        <i className="icon-user-check"></i>
        <i className="icon-user-minus"></i>
        <i className="icon-user-plus"></i>
        <i className="icon-user-tie"></i>
        <i className="icon-users"></i>
      </div>
    </div>
  );
};

export default SampleButton;
