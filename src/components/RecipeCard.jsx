import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function RecipeCard(props) {
    const { imageUrl, name } = props

    return (
        <Card className="GenericCard">
            <CardMedia
                component="img"
                height="250"
                image={imageUrl}
                alt="recipe-thumbnail"
            />
            <CardContent>
                <Typography className="CardTitle" gutterBottom variant="h5" component="text">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}