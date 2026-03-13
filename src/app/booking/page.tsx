"use client";
import {
  TextField,
  Container,
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function Booking() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Venue Booking
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Please fill in your details to reserve your spot.
          </Typography>

          <form noValidate autoComplete="off">
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                variant="standard"
                name="Name-Lastname"
                label="Name-Lastname"
                fullWidth
                required
              />

              <TextField
                variant="standard"
                name="Contact-Number"
                label="Contact-Number"
                fullWidth
                required
              />

              <FormControl variant="standard" fullWidth>
                <InputLabel id="venue-label">Venue</InputLabel>
                <Select
                  labelId="venue-label"
                  id="venue"
                  name="venue"
                  defaultValue=""
                  label="Venue"
                >
                  <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                  <MenuItem value="Spark">Spark Space</MenuItem>
                  <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
              </FormControl>

              <DateReserve />

              <Button
                variant="contained"
                fullWidth
                size="large"
                name="Book Venue"
                color="primary"
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: "bold",
                  boxShadow: 2,
                  "&:hover": { boxShadow: 4 },
                }}
                type="submit"
              >
                Book Venue
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
