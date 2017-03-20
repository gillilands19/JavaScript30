 function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        
        if(!audio) return; //stop the function
        
        audio.currentTime = 0;
        audio.play();
        
        key.classList.add('playing');
    }
    
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        //'this' is always equal to what got called against it. Below an event listener was added to each  
        this.classList.remove('playing');
    }
    
    //returns node list of all elements with the class key
    const keys = document.querySelectorAll('.key');
    
    //The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to "none", then the event will not be generated.
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));//for each keys
    window.addEventListener('keydown', playSound);