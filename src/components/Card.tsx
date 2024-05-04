import {
  Avatar,
  Button,
  ButtonProps,
  Chip,
  colors,
  Link,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { JDData } from "../App";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import StarIcon from "@mui/icons-material/Star";

const EasyApply = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#54efc3"),
  backgroundColor: "#54efc3",
  "&:hover": {
    backgroundColor: "#54efc3",
  },
}));

const UnlockReferralAds = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#4943da"),
  backgroundColor: "#4943da",
  "&:hover": {
    backgroundColor: "#4943da",
  },
}));

function Card({ data }: { data: JDData }) {
  return (
    <React.Fragment>
      <Paper
        sx={{
          padding: 2,
          borderRadius: 5,
        }}
        elevation={4}
      >
        <Stack spacing={1}>
          <Chip
            label="Posted 10 Days Ago"
            variant="outlined"
            sx={{
              width: 175,
            }}
            icon={<HourglassEmptyIcon />}
          />
          <Stack direction={"row"}>
            <Avatar
              variant="square"
              src={data.logoUrl}
              sx={{
                width: 75,
                height: 75,
                objectFit: "cover",
              }}
            />
            <Stack
              sx={{
                marginLeft: 2,
              }}
              spacing={0.4}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  opacity: 0.6,
                }}
              >
                {data.companyName}
              </Typography>
              <Typography>{data.jobRole}</Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: 12,
                }}
              >
                {data.jobRole}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              paddingTop: 1,
              color: colors.blueGrey[800],
            }}
          >
            Estimated Salary: {data?.minJdSalary || 0}-{data?.maxJdSalary || 0}{" "}
            LPA
          </Typography>
          <Typography
            sx={{
              paddingTop: 1,
            }}
          >
            About Company
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              height: 250,
              overflow: "hidden",
              maskImage: "linear-gradient(180deg, #000 60%, transparent)",
            }}
          >
            {data.jobDetailsFromCompany}
          </Typography>

          <Link>
            <Typography
              style={{
                textAlign: "center",
                color: colors.blue[800],
              }}
            >
              View More
            </Typography>
          </Link>

          <Typography
            sx={{
              color: colors.grey[500],
            }}
          >
            Minimum Experience
          </Typography>
          <Typography>1 years</Typography>

          <EasyApply
            sx={{
              padding: 1.5,
              borderRadius: 3,
            }}
          >
            <StarIcon />
            <Typography
              sx={{
                alignSelf: "center",
              }}
            >
              Easy Apply
            </Typography>
          </EasyApply>
          <UnlockReferralAds
            sx={{
              color: "white",

              padding: 1.5,
              borderRadius: 3,
            }}
          >
            <Stack direction={"row"} spacing={1}>
              <Avatar>A</Avatar>
              <Avatar>B</Avatar>
              <Typography
                sx={{
                  alignSelf: "center",
                }}
              >
                Unlock Referral Asks
              </Typography>
            </Stack>
          </UnlockReferralAds>
        </Stack>
      </Paper>
    </React.Fragment>
  );
}

export default Card;
