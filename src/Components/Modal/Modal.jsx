

import './Modal.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

function Modal(){
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event)
  }
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 220 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {[
              <div className="modal__top"></div>,
               <a className="navbar__link_modal" href="/">{t("navbar.home")}</a>,
               <a className="navbar__link_modal" href="#About">{t("navbar.about")}</a>,
               <a className="navbar__link_modal" href="#Tours">{t("navbar.tour")}</a>,
               <a className="navbar__link_modal" href="#Contacts">{t("navbar.contact")}</a>,
               <button onClick={()=>handleChange('uz')}   className="navbar__btn_modal">UZ</button>,
               <button onClick={()=>handleChange('en')}  className="navbar__btn_modal">ENG</button>,
               <button onClick={()=>handleChange('ru')}   className="navbar__btn_modal">RU</button>,
               <a className="navbar__sublink" href="https://t.me/zamonbiznestour"><i class="fa-brands fa-telegram"></i></a>,
               <a className="navbar__sublink" href="https://www.instagram.com/zamontour"><i class="fa-brands fa-instagram"></i></a>,
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
         
        </Box>
      );

    return(
        <div className="modal">
         {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><i class="fa-solid fa-bars"></i></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
        </div>
    )
}


export default Modal