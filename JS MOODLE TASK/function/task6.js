
       
        let minutes = prompt('Enter a minutes to convert seconds')
        const convertMinutesToSeconds = function(minutes){
            return minutes*60;
        };

        let seconds = convertMinutesToSeconds(minutes);
        document.write(seconds);

