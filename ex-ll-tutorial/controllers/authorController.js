var Author = require('../models/author');

//Display list of all Authors.
exports.author_list = function(req, res, next){

    Author.find()
        .sort([['family_name', 'ascending']])
        .exec(function(err, list_authors){
            if (err){ return next(err);}
            //Successfl, so render
            res.render('author_list', { title: 'Author List', author_list: list_authors});
        });

};

//Display detail page for a specific Author.
exports.author_detail = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}; 

//Display Author create from on GET.
exports.author_create_get = function(req,res){
    res.send('NOT IMPLEMENTED: Author create GET');
};

//Handle Author create on POST.
exports.author_create_post = function(req,res){
    res.send('NOT IMPLEMENTED: Author create POST');
};

//Display Author delete from on GET.
exports.author_delete_get = function(req,res){
    res.send('NOT IMPLEMENTED: Author delete GET');
};

//Handle Author delete on POST.
exports.author_delete_post = function(req,res){
    res.send('NOT IMPLEMENTED: Author delete POST');
};

//Display Author update from on GET.
exports.author_update_get = function(req,res){
    res.send('NOT IMPLEMENTED: Auhtor update GET');
};

//Handle Auhtor update on POST.
exports.author_update_post = function(req,res){
    res.send('NOT IMPLEMENTED: Author update POST');
};
