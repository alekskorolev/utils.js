import $ from 'jquery';

var $docList = $('#doclist');

window.adoc = function(title, text) {
    $docList.append(`
        <li>
            <h3>${title}</h3>
            <p>${text}</p>
        </li>
    `);
}
