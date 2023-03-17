import { useState } from 'react';
import { postStudy } from '@/api/mockAPI';
import type { PostStudyPayload } from '@/api/mockTypes';

const InfoForm = () => {
  // create state for form data
  const [formData, setFormData] = useState<PostStudyPayload>({
    studyName: '',
    title: '',
    startDate: '',
    endDate: '',
    personnel: '',
    place: '',
    placeDetails: '',
    address: '',
    activity: '',
    period: '',
    online: false,
    studyStacks: [],
  });

  // handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postStudy(formData)
      .then((response) => {
        console.log('New study created with ID:', response.data.studyId);
      })
      .catch((error) => {
        console.error('Error creating new study:', error);
      });
  };

  // handle form input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(
      (prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }),
      console.log(name, value, formData)
    );
  };

  // handle stack input changes
  const handleStackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stackId = Number(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      studyStacks: [...prevFormData.studyStacks, { stackId }],
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Study Name:
        <input type="text" name="studyName" value={formData.studyName} onChange={handleInputChange} />
      </label>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
      </label>
      <label>
        Start Date:
        <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} />
      </label>
      <label>
        Personnel:
        <input type="text" name="personnel" value={formData.personnel} onChange={handleInputChange} />
      </label>
      <label>
        Place:
        <input type="text" name="place" value={formData.place} onChange={handleInputChange} />
      </label>
      <label>
        Place Details:
        <input type="text" name="placeDetails" value={formData.placeDetails} onChange={handleInputChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
      </label>
      <label>
        Activity:
        <input type="text" name="activity" value={formData.activity} onChange={handleInputChange} />
      </label>
      <label>
        Period:
        <input type="text" name="period" value={formData.period} onChange={handleInputChange} />
      </label>
      <label>
        Online:
        <input type="checkbox" name="online" checked={formData.online} onChange={handleInputChange} />
      </label>
      <label>
        Stack IDs:
        <input type="text" name="stackIds" onChange={handleStackChange} />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export default InfoForm;
