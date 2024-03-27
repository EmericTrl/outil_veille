import React, { useState, useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TwitterFeed({ item }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Change this value to adjust the time before the loader disappears

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <div>Loading...</div> // Replace this with your actual loader
            ) : (
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={item.url}
                    options={{ height: 400, width: 700 }}
                />
            )}
        </div>
    );
}

export default TwitterFeed;