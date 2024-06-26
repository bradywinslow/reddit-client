const subredditNames = [
    {
        subheader: 'Home'
    }
]

const sampleData = [
    {
        subreddit_name_prefixed: 'Did this work?',
        author_fullname: 'Brady',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Norwich_terier_670.jpg',
        created_utc: '12:17pm',
        selftext: 'This is the post.',
        preview: {
            images: {
                source: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Norwichterrier.jpg'
                }
            }
        },
        altText: 'Two Norwich Terriers'
    },
    {
        subreddit_name_prefixed: 'Hopefully this does not show up.',
        author_fullname: 'Mariah',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Cairn_Terrier_-_001.jpg',
        created_utc: '1:03pm',
        selftext: 'This is the second post.',
        preview: {
            images: {
                source: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Cairn-Terrier-Garten1.jpg'
                }
            }
        },
        altText: 'Two Cairn Terriers'
    }
]

export { subredditNames, sampleData };
