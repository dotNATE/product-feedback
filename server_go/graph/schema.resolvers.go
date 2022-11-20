package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/dotNate/product_feedback_server/graph/generated"
	"github.com/dotNate/product_feedback_server/graph/model"
	uuid "github.com/satori/go.uuid"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input *model.UserInput) (*model.User, error) {
	id := uuid.NewV4().String()
	var user model.User
	user.ID = id

	user.FirstName = input.FirstName
	user.LastName = input.LastName
	user.Username = input.Username
	user.Email = input.Email
	user.Password = input.Password

	return &user, nil
}

// GetAllUsers is the resolver for the getAllUsers field.
func (r *queryResolver) GetAllUsers(ctx context.Context) ([]*model.User, error) {
	panic(fmt.Errorf("not implemented: GetAllUsers - getAllUsers"))
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
