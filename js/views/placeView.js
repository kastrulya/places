/**
 * Created by bubble on 23.03.16.
 */
var app = app || {};

//app.PlaceView = Marionette.View.extend({
//    template: _.template($('#place').html())
//});


//app.PlaceView = Backbone.View.extend({
app.PlaceView = Marionette.ItemView.extend({
    template: _.template($('#place').html()),
    initialize: function(){
        this.listenTo(this.model, 'destroy', this.remove);
        this.listenTo(this.model, 'change', this.render)
    },
    events: {
        'click .delete': 'deletePlace',
        'click .edit': 'editPlace',
        'click #submit-edit': 'saveChanges'
    },
    render: function(){
        //this.$el.html(this.template(this.model.toJSON()));
        this.$data = this.$('.data');
        this.$editing = this.$('.editing');
        this.$editing.hide();
        return this;
    },
    deletePlace: function(){
        this.model.destroy();
    },
    editPlace: function(){
        this.$data = this.$('.data');
        this.$editing = this.$('.editing');
        this.$data.hide();
        this.$editing.show();
    },
    saveChanges: function(){
        var title = this.$('#edit-title').val().trim();
        var description = this.$('#edit-description').val().trim();
        this.model.save({'title': title, 'description': description});
        return this.model;
    }
});