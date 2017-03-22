const chai      = require('chai')
const should    = chai.should()
const chaiHttp  = require('chai-http')

chai.use(chaiHttp);

describe('Posting new article', () => {
      it('should store a new article to the database and return data', (done) => {
            chai.request('http://localhost:3000')
            .post('/article')
            .send({
                  title: 'Hello World!',
                  content: 'Lorem ipsum dolor sit amet',
                  category: 'Learning',
                  slug: 'hello-world'
            })
            .end((err,res) => {
                    res.should.be.json;
                    res.should.have.status(200);
                    res.body.title.should.equal('Hello World!');
                    res.body.content.should.equal('Lorem ipsum dolor sit amet');
                    res.body.category.should.equal('Learning');
                    res.body.slug.should.equal('hello-world');
                    done();
            })
      })
})

describe('Getting list articles', () => {
      it('should show list articles', (done) => {
            chai.request('http://localhost:3000')
            .get('/article')
            .end((err,res) => {
                  res.should.be.json;
                  res.should.have.status(200);
                  done();
            })
      })
})

describe('Getting an article', () => {
      let slug = 'hello-world'
      it('should show one article', (done) => {
            chai.request('http://localhost:3000')
            .get('/article/'+slug)
            .end((err,res) => {
                  res.should.be.json;
                  res.should.have.status(200);
                  done();
            })
      })
})

describe('Editing an article', () => {
      let slug = 'hello-world'
      it('should store an edited article to the database and return data', (done) => {
            chai.request('http://localhost:3000')
            .put('/article/'+slug)
            .send({
                  title: 'Hello World!',
                  content: 'Lorem ipsum dolor sit amit-amit!',
                  category: 'Tutorial'
            })
            .end((err,res) => {
                  res.should.be.json;
                  res.should.have.status(200);
                  res.body.title.should.equal('Hello World!');
                  res.body.content.should.equal('Lorem ipsum dolor sit amit-amit!');
                  res.body.category.should.equal('Tutorial');
                  done();
            })
      })
})

describe('Deleting an article', () => {
      let slug = 'hello-world'
      it('should delete an article from the database', (done) => {
            chai.request('http://localhost:3000')
            .delete('/article/'+slug)
            .end((err,res) => {
                    res.should.be.json;
                    res.should.have.status(200);
                    res.body.title.should.equal('Hello World!');
                    res.body.content.should.equal('Lorem ipsum dolor sit amit-amit!');
                    res.body.category.should.equal('Tutorial');
                    done();
            })
      })
})
