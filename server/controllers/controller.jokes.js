const { response } = require('express');
const Joke = require('../models/model.jokes');

module.exports = {
    index: (request, response) => {
        Joke.find()
            .then(jokes => {
                response.json({ results: jokes })
            })
            .catch(err => response.json(err.errors));
    },
    show: (request, response) => {
        Joke.findOne({ _id: request.params.id })
            .then(joke => {
                response.json({ results: joke })
            })
            .catch(err => response.json(err.errors))
    },
    // showRandom: (request, response) => {
    //     Joke.findOneRandom()
    //         .then(joke => {
    //             response.json({ results: joke })
    //         })
    //         .catch(err => response.json(err.errors))
    // },
    create: (request, response) => {
        Joke.create(request.body)
            .then(joke => {
                response.json({ results: joke })
            })
            .catch(err => response.json(err.errors))
            // .catch(err => console.log(err));
    },
    update: (request, response) => {
        Joke.findOneAndUpdate({ _id: request.params.id }, request.body, { useFindAndModify: true, runValidators: true })
            .then(joke => {
                Joke.findOne({ _id: request.params.id })
                    .then(joke => {
                        response.json({ results: joke })
                    })
                    .catch(err => response.json(err.errors))
            })
            .catch(err => response.json(err.errors))
    },
    destroy: (request, response) => {
        Joke.deleteOne({_id:request.params.id})
            .then(result => response.json({results:result}))
            .catch(err => response.json(err.errors))
    }
}