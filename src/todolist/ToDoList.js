import React, {Component} from 'react'
import 'antd/dist/antd.css';
import {Button, Input, List, Spin} from "antd";
import store from "../story";


export default class ToDoList extends Component {

    constructor(props, context) {
        super(props, context);
        // console.log(store.getState())
        this.state = store.getState();
        this.changeValue = this.changeValue.bind(this);

        this.storeChange = this.storeChange.bind(this);
        this.clickInsert = this.clickInsert.bind(this);

        //订阅store
        store.subscribe(this.storeChange);

    }

    render() {
        return (
            <div style={{margin: '10px'}}>

                <Spin>
                    <div>
                        <input type="text"/>
                        <Button>asdasd</Button>
                    </div>
                </Spin>

                <div>
                    <Input onChange={this.changeValue} placeholder={this.state.inputValue}
                           value={this.state.inputValue}
                           style={{width: '250px', marginRight: '10px'}}/>
                    <Button type="primary" onClick={this.clickInsert}>insert</Button>
                </div>
                <div style={{margin: '10px', width: '300px'}}>
                    <List bordered dataSource={this.state.list} renderItem={item => (<List.Item>{item}</List.Item>)}/>
                </div>


            </div>
        )
    }

    changeValue(e) {
        const action = {
            type: 'changeInput',
            value: e.target.value
        };
        store.dispatch(action);
        // console.log(store.getState());
        // console.log(e.target.value)
    }

    storeChange() {
        console.log(store.getState());
        this.setState(store.getState());
    }

    clickInsert() {
        const action = {
            type: 'addItem'
        }
        store.dispatch(action);
    }
}


// import React from 'react';
// import PropTypes from 'prop-types';
// import {withStyles} from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
// import Dialog from '@material-ui/core/Dialog';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
//
// const options = [
//     'Admin',
//     'Owner',
//     'Master',
//     'Developer',
//     'Guest',
// ];
//
// class ConfirmationDialogRaw extends React.Component {
//     radioGroupRef = null;
//
//     constructor(props) {
//         super();
//         this.state.value = props.value;
//     }
//
//     state = {};
//
//     // TODO
//     componentWillReceiveProps(nextProps) {
//         if (nextProps.value !== this.props.value) {
//             this.setState({value: nextProps.value});
//         }
//     }
//
//     handleEntering = () => {
//         this.radioGroupRef.focus();
//     };
//
//     handleCancel = () => {
//         this.props.onClose(this.props.value);
//     };
//
//     handleOk = () => {
//         this.props.onClose(this.state.value);
//     };
//
//     handleChange = (event, value) => {
//         this.setState({value});
//     };
//
//     render() {
//         const {value, ...other} = this.props;
//
//         return (
//             <Dialog
//                 disableBackdropClick
//                 disableEscapeKeyDown
//                 maxWidth="xs"
//                 onEntering={this.handleEntering}
//                 aria-labelledby="confirmation-dialog-title"
//                 {...other}
//             >
//                 <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
//                 <DialogContent>
//                     <RadioGroup
//                         ref={ref => {
//                             this.radioGroupRef = ref;
//                         }}
//                         aria-label="Ringtone"
//                         name="ringtone"
//                         value={this.state.value}
//                         onChange={this.handleChange}
//                     >
//                         {options.map(option => (
//                             <FormControlLabel value={option} key={option} control={<Radio/>} label={option}/>
//                         ))}
//                     </RadioGroup>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={this.handleCancel} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={this.handleOk} color="primary">
//                         Ok
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         );
//     }
// }
//
// ConfirmationDialogRaw.propTypes = {
//     onClose: PropTypes.func,
//     value: PropTypes.string,
// };
//
// const styles = theme => ({
//     root: {
//         width: '100%',
//         maxWidth: 360,
//         backgroundColor: theme.palette.background.paper,
//     },
//     paper: {
//         width: '80%',
//         maxHeight: 435,
//     },
// });
//
// class ConfirmationDialog extends React.Component {
//     button = null;
//
//     state = {
//         open: false,
//         value: 'Dione',
//     };
//
//     handleClickListItem = () => {
//         this.setState({open: true});
//     };
//
//     handleClose = value => {
//         this.setState({value, open: false});
//     };
//
//     render() {
//         const {classes} = this.props;
//         return (
//             <div className={classes.root}>
//                 <List>
//                     <ListItem button divider disabled>
//                         <ListItemText primary="Interruptions"/>
//                     </ListItem>
//                     <ListItem
//                         button
//                         divider
//                         aria-haspopup="true"
//                         aria-controls="ringtone-menu"
//                         aria-label="Phone ringtone"
//                         onClick={this.handleClickListItem}
//                     >
//                         <ListItemText primary="Phone ringtone" secondary={this.state.value}/>
//                     </ListItem>
//                     <ListItem button divider disabled>
//                         <ListItemText primary="Default notification ringtone" secondary="Tethys"/>
//                     </ListItem>
//                     <ConfirmationDialogRaw
//                         classes={{
//                             paper: classes.paper,
//                         }}
//                         open={this.state.open}
//                         onClose={this.handleClose}
//                         value={this.state.value}
//                     />
//                 </List>
//             </div>
//         );
//     }
// }
//
// ConfirmationDialog.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(ConfirmationDialog);