const addArtist = (band, link, bio, shows=null, social=null) => {

	let postData = {
		band,
		link,
		bio,
		shows,
		social
	}

	// Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('bands').push().key

	var updates = {}
	updates['/bands/' + newPostKey] = postData

	return firebase.database().ref().update(updates)

}

const getShows = () => {

	let shows = []

	let showData = $(".shows").children()

	for (let i=0; i<showData.length; i++) {
		let object = $.parseHTML(showData[i])
		console.log(object)
	}

	return shows
}

/*$(document).ready(() => {

  var rootRef = firebase.database().ref().child("Cards");

  rootRef.on("child_added", snap => {

    var day = snap.child("Day").val()
    var time = snap.child("Time").val()
    var venue = snap.child("Venue").val()

    $("#tableHead").append("<tr><td>" + day + "</td><td>" + time +
                            "</td><td>" + venue + "</td></tr>")
  })
})*/


const submitClick = e => {

	console.log('submitting data to firebase')

	var artistName = document.getElementById("artistName")
	var soundcloudProfile = document.getElementById("soundcloudProfile")
	var artistBio = document.getElementById("artistBio")

	var shows = getShows()

	console.log(shows)

	return addArtist(
		artistName.value,
		soundcloudProfile.value,
		artistBio.value,
		shows
	)

}

$(document).ready(() => {

	// subscribe to click events
	//$("#submitBtn").click(e => submitClick(e))

	$(".join").click(e => {
		$("#joinModal").modal({keyboard: true})
	})


	$(".card").click(function() {
		$("#myModal").modal({keyboard: true})
	})
	$(".search-box").keypress(function(e) {
		if(e.which == 13) {
			$("#myModal").modal({keyboard: true})
		}
	})



})
