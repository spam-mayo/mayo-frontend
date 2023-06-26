import { patchStudyNotice } from '@/api/study/studyAPI';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

type MutationOption = UseMutationOptions<AxiosResponse<unknown, unknown>, unknown, unknown, unknown>;

const usePatchNoticeMutation = (options: MutationOption) => {
  return useMutation(patchStudyNotice, options);
};

export default usePatchNoticeMutation;
