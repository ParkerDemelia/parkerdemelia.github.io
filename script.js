document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');

    logo.addEventListener('mouseover', () => {
        let chars = "abcdefghijklmnopqrstuvwxyz1234567890/?!@#$%^&*";
        for(let i = 0; i < 100; i++) {
            let randomchar = chars[Math.floor(Math.random() * chars.length)];
            logo.innerHTML += randomchar;
        }
    });
}); 


document.addEventListener('DOMContentLoaded', function() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <a id="home" href="../index.html">[ home ] </a><br><br>
    `;
    document.body.insertBefore(nav, document.body.firstChild);
}); 

// Add reply section to blog posts
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a blog page
    if (window.location.pathname.includes('/blog/')) {
        const main = document.querySelector('main');
        if (main) {
            const replySection = document.createElement('div');
            replySection.className = 'reply-section';
            replySection.innerHTML = `
                <div style="margin-top: 2em;">
                    <h3>[ reply to this post ]</h3>
                    <div style="position: relative;">
                        <textarea id="commentBox" 
                            placeholder="What do you think?"
                            style="width: 100%; 
                            min-height: 120px; 
                            margin: 10px 0; 
                            padding: 8px; 
                            padding-bottom: 40px;
                            background: transparent; 
                            color: inherit; 
                            border: 1px solid #666;
                            font-family: inherit;
                            resize: vertical;"></textarea>
                        <button id="shareButton" 
                            style="
                            position: absolute;
                            bottom: 25px;
                            right: 10px;
                            background: transparent; 
                            color: #666; 
                            border: none; 
                            font: inherit; 
                            cursor: pointer;
                            opacity: 0.8;
                            transition: opacity 0.2s;">
                            [ share ]
                        </button>
                    </div>
                </div>
            `;
            main.appendChild(replySection);

            // Add click handler for the share button
            const shareButton = document.getElementById('shareButton');
            const commentBox = document.getElementById('commentBox');
            
            // Add hover effect
            shareButton.addEventListener('mouseover', () => {
                shareButton.style.opacity = '1';
            });
            
            shareButton.addEventListener('mouseout', () => {
                shareButton.style.opacity = '0.8';
            });
            
            shareButton.addEventListener('click', () => {
                const comment = commentBox.value.trim();
                const emailBody = `Hi Parker,\n\n${comment}\n\nBest regards`;
                const emailUrl = `mailto:parker.demelia@gmail.com?subject=Reply to: ${document.title}&body=${encodeURIComponent(emailBody)}`;
                window.location.href = emailUrl;
            });
        }
    }
    
}); 


