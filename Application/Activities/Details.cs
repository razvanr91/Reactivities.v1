using Domain;
using MediatR;
using Persistance;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext __context;
            public Handler(DataContext _context)
            {
                __context = _context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await __context.Activities.FindAsync(request.Id);
            }
        }
    }
}