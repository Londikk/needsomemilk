	(function() {
            const footer = document.getElementById('dynamicFooter');
            if (!footer) return;

            const REVEAL_HEIGHT = 60;

            function handleMouseMove(e) {
                const windowHeight = window.innerHeight;
                const mouseY = e.clientY;
                const distanceFromBottom = windowHeight - mouseY;
                
                if (distanceFromBottom <= REVEAL_HEIGHT) {
                    footer.classList.add('visible');
                } else {
                    footer.classList.remove('visible');
                }
            }
            function handleMouseLeave(e) {
                if (e.relatedTarget === null) {
                    footer.classList.remove('visible');
                }
            }
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);
            footer.classList.remove('visible');
        })();