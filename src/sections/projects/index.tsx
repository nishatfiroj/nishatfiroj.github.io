import React from "react"
import { Grid, Typography } from "@mui/material"
import "../../App.css"
import { Card } from "../../components"

// ICONS
import SsidChartIcon from "@mui/icons-material/SsidChart"
import PaletteIcon from "@mui/icons-material/Palette"
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard"
import ExtensionIcon from "@mui/icons-material/Extension"
import SchoolIcon from "@mui/icons-material/School"
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"
import AdbIcon from "@mui/icons-material/Adb"

export const Projects = () => {
  return (
    <Grid padding={4} container direction="row">
      <h2>Projects</h2>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card
            icon={<SsidChartIcon fontSize="large" sx={{ fontSize: 52 }} />}
            gradient
            height="400px"
            title="Data Visualization*"
          >
            <p>
              I’m building the data visualization library for NCR using a
              combination of D3 and Victory data vis libraries. Our data vis
              charts and designs need to reflect the data analysis needs of our
              white-labeled customers while also being accessible and robust.
            </p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            icon={<PaletteIcon fontSize="large" sx={{ fontSize: 52 }} />}
            github="https://github.com/nf185048/ColorExploration"
            gradient
            height="400px"
            title="Creating Theming Algorithms"
          >
            <p>
              Color switching applications and typography exploratory plugins
              help designers to test their interfaces for the best aesthetic and
              accessibility requirements.
            </p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            icon={<DeveloperBoardIcon fontSize="large" sx={{ fontSize: 52 }} />}
            gradient
            height="400px"
            title="Hackathons"
            github="https://github.com/nf185048/AccessibilityPassport"
          >
            <p>
              I've documented and audited the design system of most major
              companies and have compared them to the NCR design system to
              better understand where our successes and downfalls are.
            </p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            icon={<ExtensionIcon fontSize="large" sx={{ fontSize: 52 }} />}
            gradient
            height="400px"
            title="Building Plugins*"
          >
            <p>
              I’ve built Figma plugins to accommodate the changing needs of
              designers, in order to fast track the speed at which they output
              designs.
            </p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            icon={<SchoolIcon fontSize="large" sx={{ fontSize: 52 }} />}
            gradient
            height="400px"
            title="The Gerrymandering App"
            github="https://github.com/nishatfiroj/TheGerrymanderingApp"
          >
            <p>
              I built an educational tool to be used in the classroom, to teach
              young students about how gerrymanderying affects their local
              political landscape. They can explore definitions, case studies,
              and more to enhance their learning experiences.
            </p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            icon={<SportsEsportsIcon fontSize="large" sx={{ fontSize: 52 }} />}
            gradient
            height="400px"
            title="Gameboy Advanced"
            github="https://github.com/nishatfiroj/GBA-Dodge-The-Blocks"
          >
            <p>
              I built a few C++ games, playable on the Gameboy Advanced. One
              game is an adventure game that involves solving different
              platforms to win. The other is a simple game of dexterity where
              the user must dodge red blocks and touch green ones.
            </p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            icon={<AdbIcon fontSize="large" sx={{ fontSize: 52 }} />}
            gradient
            height="400px"
            title="Cameroon app"
            github="https://github.com/nishatfiroj/CameroonSite"
          >
            <p>
              For my junior design project at my undergrad at Georgia Tech, my
              friends and I built an Android app and companion website to be
              distributed amongst the citizens of Cameroon while they were
              undergoing the extreme duress of a mass genocide.
            </p>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="subtitle2" paddingTop="4em">
        *Due to the internal nature of this corporate project, the repo URL
        cannot be provided
      </Typography>
    </Grid>
  )
}
