import React from 'react';
import { Link } from 'react-router-dom'
import {
  ProSidebar,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      height: '90vh',
    },
  }),
)

const MenuList = () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <ProSidebar>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem>Cliente</MenuItem>
            <SubMenu title="Produtos">
              <MenuItem>Cera</MenuItem>
              <MenuItem>Dissilicato de Lítio</MenuItem>
              <MenuItem>Fresa</MenuItem>
              <MenuItem>Peek</MenuItem>
              <MenuItem>PMMA</MenuItem>
              <MenuItem>Polimax</MenuItem>
              <MenuItem>
                Zirconia
              <Link to="/produto/zirconia" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}

export default MenuList
