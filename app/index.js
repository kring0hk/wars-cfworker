import Router from './router'

import IndexView from './views/pages/index'

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const init = {
        headers: { 'content-type': 'text/html; charset=utf-8' },
    }

    const r = new Router()

    r.get('.*/', () => {
        return new Response(IndexView({}), init)
    })

    const resp = await r.route(request)
    return resp
}
