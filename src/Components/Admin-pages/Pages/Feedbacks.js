import React from "react";
import Coverimage from '../assets/feedback.png'
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Downarrow from "../assets/down-arrow.svg";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Delete from '../assets/delete.svg';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import AdminNav from "../AdminNav";


const Feedbacks=()=>{

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [scrollTop, setScrollTop] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);
    const bottomToTop = () => {
        window.scrollTo({
            top: 760,
            behavior: "smooth",
        });
    };

    return(
        <div>
            <AdminNav/>
            <Typography style={{fontWeight:500,paddingTop:20,marginLeft:100,fontWeight:600}}
                variant="h5"
                align="left"
                color="#656565"
                >
                Welcome Admin!
            </Typography>  
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:12}}>

            
            <div className="feedback-container" style={{width:'90%',height:400,backgroundColor:'#ADC1B5',borderRadius:32,display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>

                <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>

                 <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'left',flexDirection:'column'}}>   
                   
                   <p style={{fontSize:54,margin:0,fontWeight:600,color:'#252525'}}>Feedbacks</p>
                   <p style={{fontSize:16,margin:0,fontWeight:400,color:'#656565',marginTop:32}}>You can view the feedbacks you get from the <br/>users of Woodie here</p>
                   <p style={{fontSize:16,margin:0,fontWeight:400,color:'#656565',marginTop:32}}>Scroll down to view or edit the feedbacks</p>

                 </div>    

                

                <img src={Coverimage} style={{width:500,height:500,objectFit:'contain'}}/>
                </div>

            </div>

            </div>

            <div className="feedback-content" style={{marginTop:32,width:'100%',height:500}}>
            <p style={{margin:0,fontSize:20,fontWeight:600,color:"#252525",marginLeft:50}}>Feedbacks from the Users</p>
              <div style={{marginLeft:62}}>
              <div className="comment-head" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:32}}> 
                <div className="comments" style={{display:'flex',flexDirection:'row'}}>
                    <Avatar>AJ</Avatar>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:12}}>
                        <p style={{fontSize:18,color:'#252525',fontWeight:500,margin:0}}>Allan Jerrold</p>
                        <p style={{fontSize:12,color:'#656565',fontWeight:400,margin:0}}>2:08 PM</p>
                    </div>
                </div>
                <Button onClick={handleClickOpen} style={{borderWidth:0,background:'none',marginRight:100,borderRadius:20}}>
                    <img src={Delete} style={{width:32,height:32}}/>
                </Button>      
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"    
                        >
                            <DialogTitle id="alert-dialog-title">
                            {"Delete Confirmation"}
                            </DialogTitle>
                            <DialogContent >
                            <DialogContentText id="alert-dialog-description">
                               Are you sure you want to delete this comment permanently from the feedback ?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} style={{background:'#EEEE',color:'#656565'}} >Cancel</Button>
                            <Button onClick={handleClose} autoFocus style={{background:'#F25C6F',color:'#ffff'}}>
                                Delete
                            </Button>
                            </DialogActions>
                        </Dialog>
                 </div>
                    <div style={{marginTop:20}}>
                            <p style={{color:'#656565',fontWeight:400,fontSize:14,width:'80%',textAlign:'left'}}>"🌳 Wow, I never knew our campus was such a green paradise! Scanning the QR codes on the trees to learn more about them is such a cool feature. 🌿 This is a perfect blend of technology and nature. Kudos to the university for creating an environment where we can truly appreciate and connect with nature! 🌱"</p>
                    </div>
                    <div style={{width:'80%',height:1,backgroundColor:'#656565',marginTop:32}}/>
                 </div>

            

            </div>

        </div>
    )
}
export default Feedbacks;