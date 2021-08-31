import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Notes = ({ notes, onRemove }) => (
         <TransitionGroup component="ul" className="list-group">
            {notes.map(note =>
            <CSSTransition key={note.id} classNames="note" timeout={800} >
                <li className="list-group-item note d-flex justify-content-between note">
                    <div>
                        <strong className="mr-4">{note.title}</strong>
                        <span>{new Date().toLocaleDateString()}</span>
                    </div>

                    <button onClick={() => onRemove(note.id)} className="btn btn-outline-danger">&times;</button>
                </li>
                </CSSTransition>
            )}
        </TransitionGroup>
    )