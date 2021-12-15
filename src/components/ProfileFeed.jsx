import React from 'react';
import axios from 'axios';
import ContentTabs from './ContentTabs'
import RecipesList from './RecipesList';
import { useState, useEffect } from "react";

export default function ProfileFeed() {
    return (
        <div>
            <ContentTabs/>
        </div>
    )
}
