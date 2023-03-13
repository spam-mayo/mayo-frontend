import type { FC } from 'react';

const SampleGrid: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-md-12 col-lg-12">
          <div style={{ backgroundColor: 'hotpink' }}>4-12-12</div>
        </div>
        <div className="col-sm-4 col-md-6 col-lg-6">
          <div style={{ backgroundColor: 'hotpink' }}>4-6-6</div>
        </div>
        <div className="col-sm-4 col-md-6 col-lg-6">
          <div style={{ backgroundColor: 'hotpink' }}>4-6-6</div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div style={{ backgroundColor: 'hotpink' }}>4-4-4</div>
        </div>
        <div className="col-sm-1 col-md-4 col-lg-4">
          <div style={{ backgroundColor: 'hotpink' }}>1-4-4</div>
        </div>
        <div className="col-sm-3 col-md-4 col-lg-4">
          <div style={{ backgroundColor: 'hotpink' }}>3-4-4</div>
        </div>
      </div>
    </div>
  );
};

export default SampleGrid;
