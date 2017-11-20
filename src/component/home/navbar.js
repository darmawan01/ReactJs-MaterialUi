import React from 'react';
import { AppBar, MenuItem , Drawer, FlatButton } from 'material-ui';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false };
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({open: false});
    render() {
        return (
            <div className="">
                <AppBar
                    title="Menu"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={<FlatButton title="Pendaftaran" label="Pendaftaran" />}
                    
                />
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <AppBar 
                        title="Perizinan"
                        onLeftIconButtonTouchTap={this.handleClose}

                    />
                    <MenuItem onClick={this.handleClose}>Pendaftaran</MenuItem>
                    <MenuItem onClick={this.handleClose}>Pengaduan Perizinan</MenuItem>
                    <MenuItem onClick={this.handleClose}>Pelayanan Perizinan</MenuItem>
                    <MenuItem onClick={this.handleClose}>Info Perizinan</MenuItem>
                </Drawer>
            </div>
        );
    }
}

