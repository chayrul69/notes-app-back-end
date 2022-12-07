const {
    addNoteHandler, getAllNotesHandler, getNotesById, editNoteById, deleteNotesById,
} = require('./handler');

const routes = [{
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
},
{
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
},
{
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesById,
},
{
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteById,
},
{
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotesById,
}];
module.exports = routes;