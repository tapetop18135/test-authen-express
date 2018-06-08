import fs from 'fs'

export function mainRouter(app){
    const APP_DIR = `${__dirname}/app`
    const inControllers = fs.readdirSync('./app/controllers').filter(v => {
        return fs.statSync(`./app/controllers/${v}`).isFile()
    })
    inControllers.forEach( value => {
        const feature = value.split('_')[0]
        app.use(`/${feature}`,require(`../controllers/${value}`))
    })

}