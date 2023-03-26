import { useState } from "react";
import { Grid, Button, Select, MenuItem, TextField } from "@mui/material"
import List from "components/main/List";
import PostCode from "components/common/PostCode";

const MainPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid container>
        <Grid item xs>
          <TextField placeholder="골프장명" />
        </Grid>
      </Grid>
      <Grid container alignItems="center">
        <Grid item xs>
          <Select defaultValue="" displayEmpty>
            <MenuItem value="">이용서비스</MenuItem>
          </Select>
          <Select defaultValue="" displayEmpty>
            <MenuItem value="">지역</MenuItem>
          </Select>
        </Grid>
        <Grid item xs>
          <Button color="primary" variant="contained">초기화</Button>
          <Button color="primary" variant="contained">조회</Button>
        </Grid>
      </Grid>
      <Button onClick={() => setOpen(!open)}>검색</Button>
      {open && <PostCode />}
      <List />
    </>
  )
}

export default MainPage;