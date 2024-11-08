import React from "react";
import { Card, CardActions, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import moment from "moment"
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";



const Post = ({ post, setCurrentId }) =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setCurrentId(post._id);
    };

    const checkImage = (file) =>{

        let extension = file?.split(':')[1]?.split('/')[0];

        //console.log(extension);
        if(extension === "image") return true;

        return false;
    }

    return (
        <Card className={classes.card}>
            {
                checkImage(post.selectedFile) ? 
                    <CardMedia className={classes.media} component="image" image={post.selectedFile} title={post.title}/> :
                    <CardMedia className={classes.video} component="video" controls image={post.selectedFile} title={post.title}/>
            }

            <div className={classes.overlay}>
                <Typography variant="h6" >{post.creator}</Typography>
                <Typography variant="body2" >{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: "white"}} size="small" onClick={() => goToTop()}>
                    <EditIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <Typography className={classes.title} component="p" variant="body2" color="textSecondary">{post.message}</Typography>
       
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>{dispatch(likePost(post._id))}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {" : "}
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>{dispatch(deletePost(post._id))}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;