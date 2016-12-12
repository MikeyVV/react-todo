var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var AddTodo = require('AddTodo')

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
    })

  it('should call onAddTodo with valid data', () => {
    var spy = expect.createSpy()
    var todoText = 'go fishing'
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(todoText)
  })

  it('should not call onAddTodo when invalid input', () => {
    var spy = expect.createSpy()
    var todoText = ''
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})