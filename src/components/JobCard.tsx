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
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import StarIcon from "@mui/icons-material/Star";
import { IJDData } from "../types/types";
import { yellow } from "@mui/material/colors";

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

function JobCard({ data }: { data: IJDData }) {
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
                {data.location}
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
              height: 180,
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
            <StarIcon
              sx={{
                color: yellow[600],
              }}
            />
            <Typography
              sx={{
                alignSelf: "center",
                marginLeft: 1,
                textTransform: "none",
                fontWeight: 700,
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
              <Avatar
                src={"https://picsum.photos/200"}
                sx={{
                  filter: "blur(2px)",
                }}
              />
              <Avatar
                src={"https://picsum.photos/200"}
                sx={{
                  filter: "blur(2px)",
                }}
              />
              <Typography
                sx={{
                  alignSelf: "center",
                  textTransform: "none",
                  fontWeight: 700,
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

export default JobCard;
