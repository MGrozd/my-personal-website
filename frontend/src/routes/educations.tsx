// author: Matej Grozdanić
// date: 2025-05-13
// description: This is the educations page component that displays the user's educations information
// license: MIT

import { Card, CardContent, Typography, Divider, Box, Link } from "@mui/material";
import { SchoolRounded, LinkRounded, BusinessRounded } from "@mui/icons-material";
import educationsData from "../data/educations";

const Educations = () => {
  return (
    <Card sx={{ maxWidth: 900, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <SchoolRounded sx={{ mr: 1, color: "pink" }} />
          <Typography variant="h5">Educations</Typography>
        </Box>
        {educationsData.map((education, index) => (
          <Box key={index} mb={3}>
            <Divider sx={{ mb: 2, backgroundColor: "grey.400", width: "100%" }} />
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">{education.degree}</Typography>
              <Typography variant="subtitle2" color="text.secondary">{education.date}</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <BusinessRounded sx={{ mr: 1, color: "black" }} />
              <Typography variant="subtitle2" color="text.secondary">{education.institute}</Typography>
            </Box>
            <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                <Typography variant="body2">{education.programme}</Typography>
                <Box component="li" display="flex" alignItems="center" mb={0.5}>
                  <LinkRounded sx={{ mr: 1, color: "gold" }} />
                  <Link href={education.url} variant="body2">{education.url}</Link>
                </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default Educations;
