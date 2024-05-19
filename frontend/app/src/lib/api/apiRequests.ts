import axios from "axios";
import {UI_AVATARS_BASE_URL} from "$lib/constants/sites";

interface AvatarParams {
    name?: string;
    background?: string;
    color?: string;
  }


export const generateAvatarUrl = async ({
    name,
    background = 'random',
    color = 'random'
  }: AvatarParams): Promise<string> => {
    const url = new URL(UI_AVATARS_BASE_URL);
  
    if (name) {
      url.searchParams.append('name', name);
    }
  
    if (background) {
      url.searchParams.append('background', background);
    }
  
    if (color) {
      url.searchParams.append('color', color);
    }
  
    try {
      const response = await axios.get(url.toString());
      return response.request.responseURL;
    } catch (error) {
      console.error(error);
      return '';
    }
  };
  