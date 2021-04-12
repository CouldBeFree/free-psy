export interface FetchSetPhotoAction {
  type: string;
  payload: {
    id: string;
    file: File;
  };
}