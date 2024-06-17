import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdxCollapsibleContentDirective } from '../src/collapsible-content.directive';
import { RdxCollapsibleRootDirective } from '../src/collapsible-root.directive';

@Component({
    selector: 'rdx-collapsible-mock-trigger',
    standalone: true,
    imports: [RdxCollapsibleRootDirective, RdxCollapsibleContentDirective],
    template: `
        <div CollapsibleRoot>
            <button CollapsibleContent>Content</button>
        </div>
    `
})
class RdxCollapsibleMockComponent {}

describe('RdxCollapsibleContentDirective', () => {
    let component: RdxCollapsibleMockComponent;
    let fixture: ComponentFixture<RdxCollapsibleMockComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(RdxCollapsibleMockComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });
});
