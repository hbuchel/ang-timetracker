'use strict';

angular.module('timetrack.version', [
  'timetrack.version.interpolate-filter',
  'timetrack.version.version-directive'
])

.value('version', '0.1');
