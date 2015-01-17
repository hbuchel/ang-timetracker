'use strict';


angular.module('timetrack.auth', [])

.factory("Entry", function ($firebase) {
	var ref = new Firebase('https://amber-torch-4197.firebaseio.com');
	var entries = $firebase(ref.child('entries')).$asArray();

	var Entry = {
		all: entries,
		create: function (entry) {
			return entries.$add(entry);
		},
		get: function (entryId) {
			return $firebase(ref.child('entries').child(entryId)).$asObject();
		},
		delete: function (entry) {
			return entries.$remove(entry);
		}
	}

	return Entry;
})

.factory("Project", function ($firebase) {
	var ref = new Firebase('https://amber-torch-4197.firebaseio.com');
	var projects = $firebase(ref.child('projects')).$asArray();

	var Project = {
		all: projects,
		create: function (project) {
			return projects.$add(project);
		},
		get: function (projectId) {
			return $firebase(ref.child('projects').child(projectId)).$asObject();
		},
		delete: function (project) {
			return projects.$remove(entry);
		}
	}

	return Project;
});