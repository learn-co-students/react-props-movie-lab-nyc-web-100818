we render info on Movieshowcase. then we make a call to a method above called generateMovieCards. the method then maps through the imported array from movieData. It takes out the whole object in the array and the index. we make the key the index and use the ...data. then we pass that data into the movieCard.

we then head over to the moviecard and render the front card. take the poster name and send it to the cardfront class.

then we hhead over to the card front class. Here we take the prop data, use the key name of the sent over prp and make it the background image in a style format. classname cardfront for css purposes.

then we head back to the moviecard. we go to the next line of render and we take the title imdbrating and genres of the prop passed from the movieshowcase. we give them names and pass to the cardback component.

we then head to the cardback. we make the title class name of title and innertext of props.title. then we hit the genreratingelement method. we say that if there is a rating then we head to the imgMapper object and find the rating. lastly we give the genres of the each movie and join with a comma and a space
