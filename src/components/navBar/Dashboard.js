import React from 'react';
import AddingTodo from '../bodyComponents/AddingTodo'
import CreatingTasks from '../bodyComponents/CreatingTasks'
import TodoForm from '../bodyComponents/TodoForm'

//isnt working not sure why
function Dashboard(props) {
    return (
        <div className='bg-secondary'>
            {/* div for the buttons bar at the top */}
            <div className='d-flex flex-row-reverse mt-5 pt-3 px-2'>
                <CreatingTasks />
            </div>
            
            <div className='container'>
                <div class="container fluid p-5 mt-5 bg-warning w-25 mw-75">
                 <div class="card-columns">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Card title that wraps to a new line</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card bg-primary text-white text-center p-3">
                        <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                        <footer class="blockquote-footer">
                            <small>
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </div>
                    <div class="card text-center">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>

</div>





<div class="container p-5 mt-5 bg-danger w-25 mw-50">
<div class="card-columns">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Card title that wraps to a new line</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card bg-primary text-white text-center p-3">
                        <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                        <footer class="blockquote-footer">
                            <small>
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </div>
                    <div class="card text-center">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>

                </div>





                <div class="container p-5 mt-5 bg-success w-25 mw-50">
                <div class="card-columns">
                                    <div class="card">
                                        <div class="card-body">
                                        <h5 class="card-title">Card title that wraps to a new line</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div class="card bg-primary text-white text-center p-3">
                                        <blockquote class="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                        <footer class="blockquote-footer">
                                            <small>
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                            </small>
                                        </footer>
                                        </blockquote>
                                    </div>
                                    <div class="card text-center">
                                        <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    </div>

                </div>
                </div>

        </div>
    );
}

export default Dashboard;