angular.module('PersonalSite')
	.factory('Page', function(){
	  var title = '';
	  const defaultBackground = "../img/cemetary.png";
	  var background = defaultBackground;
	  return {
	    title: function() { return title; },
	    setTitle: function(newTitle) { title = newTitle; },
	    background: function() { return background; },
	    setBackground: function(newBackground) { 
	    	newBackground === undefined ? background = defaultBackground : background = newBackground; 
	    }
	  };
	});