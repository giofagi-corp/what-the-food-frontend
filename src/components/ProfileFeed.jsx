import React from 'react';
import axios from 'axios';
import ProfileTabs from './ProfileTabs'
import RecipesList from './RecipesList';
import { useState, useEffect } from "react";

export default function ProfileFeed() {
    return (
        <div>
            <ProfileTabs/>
        </div>
    )
}
