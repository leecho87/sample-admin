import { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import styled from "@emotion/styled";

const drawerWidth = 160;

const Wrapper = styled.article<{ width: number }>`
  width:${(props) => props.width}px;
  height:100%;
  background-color:#f0f0f0;
  .head {
    padding:30px 24px;
    font-size:18px;
    text-align:center;
    color:#fff;
    background-image:linear-gradient(142deg, #2c7fff -5%, #6a14ad 114%);

    span {
      display:block;
      font-size:14px;
      font-weight:100;
    }
  }
  .menu {
    li {
      height:64px;
      button {
        height:100%;
        padding:0;
      }
    }
  }
`;

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleSidebarToggle = () => {
    window.innerWidth < 769 && setOpen(false);
  }

  useEffect(() => {
    window.addEventListener('resize', handleSidebarToggle);

    return () => {
      window.removeEventListener('resize', handleSidebarToggle);
    }
  }, [])

  return (
    <Wrapper width={drawerWidth}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        hideBackdrop
      >
        <h1 className="head">본사 관리자<span>(G-Field / 경기관제 / 연단체)</span></h1>
        <List className="menu">
          <ListItem disablePadding>
            <ListItemButton>제휴골프장관리</ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Wrapper>
  )
}

export default Sidebar;