// Analytics utility for tracking downloads and events
import { track } from '@vercel/analytics';

export const trackDownload = (fileName: string) => {
  // Track using Vercel Analytics
  track('cv_download', {
    file_name: fileName,
    timestamp: new Date().toISOString(),
  });
};

export const trackAwardClick = (awardTitle: string, awardLink?: string) => {
  track('award_click', {
    award_title: awardTitle,
    has_link: !!awardLink,
    timestamp: new Date().toISOString(),
  });
};

export const trackProjectClick = (projectTitle: string, projectLink: string) => {
  track('project_click', {
    project_title: projectTitle,
    project_link: projectLink,
    timestamp: new Date().toISOString(),
  });
};
