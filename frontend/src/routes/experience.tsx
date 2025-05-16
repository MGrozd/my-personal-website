// author: Matej Grozdanić
// date: 2025-05-13
// description: This is the experience page component that displays the user's work experience information
// license: MIT

import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import { BusinessRounded, GradeRounded, Restore } from "@mui/icons-material";
import workExperienceData from "../data/experience";


const WorkExperience = () => {
  return (
    <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Restore sx={{ mr: 1, color: "purple" }} />
          <Typography variant="h5">Experience</Typography>
        </Box>
        {workExperienceData.map((job, index) => (
          <Box key={index} mb={3}>
            <Divider sx={{ mb: 2, backgroundColor: "grey.400", width: "100%" }} />
            <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
              <Typography variant="h6">{job.position}</Typography>
              <Typography variant="subtitle2" color="text.secondary">{job.date}</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <BusinessRounded sx={{ mr: 1, color: "black" }} />
              <Typography variant="subtitle2" color="text.secondary">{job.company}</Typography>
            </Box>
            <Box component="ul" sx={{ pl: 2, mt: 1 }}>
              {job.details.map((detail, i) => (
                <li key={i} >
                  <Typography variant="body2">{detail}</Typography>
                </li>
              ))}

              {job.achievements.map((achievement, i) => (
                <Box key={`achievement-${i}`} component="li" display="flex" alignItems="center" mb={0.5}>
                  <GradeRounded sx={{ mr: 1, color: "gold" }} />
                  <Typography variant="body2">{achievement}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default WorkExperience;
