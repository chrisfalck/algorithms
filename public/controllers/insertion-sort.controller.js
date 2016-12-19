app.controller('InsertionSortCtrl', ['$scope', ($scope) => {
    let randomNumbers = [];
    for (let i = 0; i < 10; ++i) {
        let rand = Math.floor(Math.random() * 100);
        randomNumbers.push(rand);
    }
    $scope.unsortedArray = randomNumbers;

    // Holds the intermittent steps of our sorting. 
    $scope.sortingSteps = [randomNumbers.slice()];

    // Get a copy of the array by values (not by reference).
    let copy = randomNumbers.slice();

    // The algorithm itself.
    for (let i = 1; i < copy.length; ++i) {
        let key = copy[i];

        // Already in correct order, proceed to the next element. 
        if (key >= copy[i - 1]) continue;

        // Otherwise, shift and insert.
        let j = i;
        while (j > -1 && (key < copy[j - 1])) {
            copy[j] = copy[j - 1];
            j -= 1;
        }
        copy[j] = key;

        // Save step snapshot for display on the page.
        $scope.sortingSteps.push(copy.slice());
    }
}]);