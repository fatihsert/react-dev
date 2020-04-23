import React from 'react'
import {ReplaySubject,AsyncSubject,BehaviorSubject,Subject} from 'rxjs'
export default function RxjsTest() {


 
    const subject = new AsyncSubject();
     
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
     
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
     
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
     
    subject.next(5);
    subject.complete();
     
     
    return (
        <div>
            
        </div>
    )
}
